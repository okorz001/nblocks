import { createContext, useEffect, useState } from 'react'

export const ServiceWorkerContext = createContext<ServiceWorkerRegistration>(null)

export default function ServiceWorker(props: {
  script: string,
  children: React.ReactNode,
}) {
  const [reg, setReg] = useState<ServiceWorkerRegistration>(null)

  // register service worker on first render only
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      (async () => {
        const reg = await navigator.serviceWorker.register(props.script)

        // trigger refresh when new service worker is activated
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated') {
              console.log('new worker activated')
              window.location.reload()
            }
          })
        })

        setReg(reg)
      })()
    } else {
      console.log('worker not supported')
    }
  }, [])

  return (
    <ServiceWorkerContext.Provider value={reg}>
      {props.children}
    </ServiceWorkerContext.Provider>
  )
}
