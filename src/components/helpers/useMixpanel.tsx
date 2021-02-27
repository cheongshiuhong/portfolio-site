import { useEffect, useRef } from 'react';
import mixpanel from 'mixpanel-browser';

export default function useMixpanel() {
  const cache = useRef<boolean>(true);

  useEffect(() => {    
    if (cache.current && process.env.NEXT_PUBLIC_MIXPANEL) {
      mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL, {}, 'mixpanel');
      cache.current = false;
    }
  }, [])

  const track = (name, payload = {}) => {
    if (process.env.NEXT_PUBLIC_MIXPANEL) {
      mixpanel.track(name, payload)
    }
  }

  return {
    track,
    trackNav: (to: string, payload={}) => track(`nav${to}`, {to, ...payload}),
    trackFileClick: (from: string, to: string, payload={}) => track(`fileClick-${to}`, {from, to, ...payload}),
    trackTeammateClick: (from: string, to: string, payload={}) => track(`teammateClick${to}`, {from, to, ...payload}),
  }
}
