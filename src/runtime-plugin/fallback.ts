import type { FederationRuntimePlugin } from '@module-federation/runtime';

const fallbackPlugin = (errorMessage = 'Module loading failed, please try again later'): FederationRuntimePlugin => {
  return {
    name: 'fallback-plugin',
    async errorLoadRemote() {
      const React = await import('react');
      const FallbackComponent = React.memo(() => {
        return React.createElement(
          'div',
          {
            style: {
              padding: '16px',
              border: '1px solid #ffa39e',
              borderRadius: '4px',
              backgroundColor: '#fff1f0',
              color: '#cf1322'
            }
          },
          errorMessage
        );
      });
      FallbackComponent.displayName = 'ErrorFallbackComponent';
      return () => ({
        __esModule: true,
        default: FallbackComponent
      });
    },
  };
};
export default fallbackPlugin;