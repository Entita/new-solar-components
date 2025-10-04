interface TrackFacebookEvent {
    event: string;
    data: Record<string, any>;
}

interface TrackGoogleEvent {
    action: string;
    category: string;
    value?: number;
}

export const trackPageView = async (page: string) => {
  if (typeof window !== 'undefined') {
    const ReactGA = (await import('react-ga4')).default;
    ReactGA.send({ hitType: 'pageview', page: '/' + page });
  }
};

export const trackPageViewFacebook = async () => {
  if (typeof window !== 'undefined') {
    const ReactPixel = (await import('react-facebook-pixel')).default;
    ReactPixel.pageView()
  }
};

export const trackFacebookEvent = async ({ event, data }: TrackFacebookEvent) => {
  if (typeof window !== 'undefined') {
    const ReactPixel = (await import('react-facebook-pixel')).default;
    ReactPixel.track(event, data);
  }
};

export const trackGoogleEvent = async (trackData: TrackGoogleEvent) => {
  if (typeof window !== 'undefined') {
    const ReactGA = (await import('react-ga4')).default;
    ReactGA.event(trackData);
  }
};
