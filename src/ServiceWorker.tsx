import { createContext, useContext, useEffect, useState } from 'react'

/**
 * A service worker.
 */
export interface ServiceWorkerContext {
  /**
   * The service worker registration for the provided script.
   */
  registration?: ServiceWorkerRegistration
}

const CONTEXT = createContext<ServiceWorkerContext>(null)

/**
 * This component registers a service worker and exposes it to any child components.
 * @param props.script The script to load the service worker from.
 * @param props.children The component(s) to render with access to the service worker.
 */
export function ServiceWorkerProvider(props: {
  script: string,
  children?: React.ReactNode,
}) {
  const [registration, setRegistration] = useState<ServiceWorkerRegistration>(null)

  // register service worker on first render only
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      (async () => {
        const registration = await navigator.serviceWorker.register(props.script)

        // trigger refresh when new service worker is activated
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated') {
              console.log('new worker activated')
              window.location.reload()
            }
          })
        })

        setRegistration(registration)
      })()
    } else {
      console.log('worker not supported')
    }
  }, [])

  return (
    <CONTEXT.Provider value={{ registration }}>
      {props.children}
    </CONTEXT.Provider>
  )
}

/**
 * A React hook for the service worker.
 * @returns The service worker
 */
export function useServiceWorker(): ServiceWorkerContext {
  const context = useContext(CONTEXT)
  if (!context) {
    throw new Error('useServiceWorker requires a <ServiceWorkerProvider> ancestor')
  }
  return context
}
