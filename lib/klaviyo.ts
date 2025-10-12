// Klaviyo integration utilities
const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY;
const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID || 'TmHzae';

export interface KlaviyoProfile {
  email: string;
  first_name?: string;
  last_name?: string;
  properties?: Record<string, any>;
}

export interface KlaviyoResponse {
  success: boolean;
  message: string;
  profile_id?: string;
}

export async function subscribeToKlaviyo(profile: KlaviyoProfile): Promise<KlaviyoResponse> {
  if (!KLAVIYO_API_KEY) {
    throw new Error('Klaviyo API key not configured');
  }

  try {
    // First, create or update the profile
    const profileResponse = await fetch('https://a.klaviyo.com/api/profiles/', {
      method: 'POST',
      headers: {
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        'Content-Type': 'application/json',
        'revision': '2024-10-15'
      },
      body: JSON.stringify({
        data: {
          type: 'profile',
          attributes: {
            email: profile.email,
            first_name: profile.first_name,
            last_name: profile.last_name,
            properties: profile.properties || {}
          }
        }
      })
    });

    if (!profileResponse.ok) {
      const errorData = await profileResponse.json();
      console.error('Klaviyo profile creation error:', errorData);
      throw new Error('Failed to create profile');
    }

    const profileData = await profileResponse.json();
    const profileId = profileData.data.id;

    // Then, add the profile to the list
    const listResponse = await fetch(`https://a.klaviyo.com/api/lists/${KLAVIYO_LIST_ID}/relationships/profiles/`, {
      method: 'POST',
      headers: {
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        'Content-Type': 'application/json',
        'revision': '2024-10-15'
      },
      body: JSON.stringify({
        data: [
          {
            type: 'profile',
            id: profileId
          }
        ]
      })
    });

    if (!listResponse.ok) {
      const errorData = await listResponse.json();
      console.error('Klaviyo list subscription error:', errorData);
      throw new Error('Failed to subscribe to list');
    }

    return {
      success: true,
      message: 'Successfully subscribed to newsletter!',
      profile_id: profileId
    };

  } catch (error) {
    console.error('Klaviyo subscription error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to subscribe to newsletter'
    };
  }
}

export async function trackEvent(eventName: string, properties: Record<string, any> = {}) {
  if (!KLAVIYO_API_KEY) {
    console.warn('Klaviyo API key not configured, skipping event tracking');
    return;
  }

  try {
    await fetch('https://a.klaviyo.com/api/events/', {
      method: 'POST',
      headers: {
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        'Content-Type': 'application/json',
        'revision': '2024-10-15'
      },
      body: JSON.stringify({
        data: {
          type: 'event',
          attributes: {
            metric: {
              data: {
                type: 'metric',
                attributes: {
                  name: eventName
                }
              }
            },
            properties: properties,
            timestamp: new Date().toISOString()
          }
        }
      })
    });
  } catch (error) {
    console.error('Klaviyo event tracking error:', error);
  }
}
