import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { MapChangeTypeWrapperStyled, MapContactInfoWrapperStyled, MapContactRowWrapperStyled, MapContentWrapperStyled, MapWrapperStyled } from './Map.style'
import Mail from '../SVG\'s/Mail'
import Phone from '../SVG\'s/Phone'
import MapForm from './MapForm'
import CopyComponent from './CopyComponent'

const storageCoords = {
  lat: 50.07193056463231,
  lng: 16.01237338202638,
}

const companyCoords = {
  lat: 50.024100,
  lng: 15.769220,
}

export default React.memo(function Map() {
  const [mapCenterType, setMapCenterType] = React.useState<'storage' | 'company'>('company')
  const [map, setMap] = React.useState<any>(null)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    mapIds: ['688d1e65480187cb'],
  })
  const emailRef = React.useRef<HTMLSpanElement>(null!)
  const phoneRef = React.useRef<HTMLSpanElement>(null!)

  const onLoad = React.useCallback(async (map: any) => {
    const { AdvancedMarkerElement }: any = await google.maps.importLibrary("marker")
    new AdvancedMarkerElement({ position: companyCoords, map, title: 'Company marker' })
    new AdvancedMarkerElement({ position: storageCoords, map, title: 'Storage marker' })
    // const movedCoords = mapCenterType === 'storage' ? storageCoords : companyCoords
    // const newCoords = { lng: movedCoords.lng - 0.00007, lat: movedCoords.lat - 0.00001 }
    // const bounds = new window.google.maps.LatLngBounds(newCoords)
    // map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(() => setMap(null), [])
  const toggleMapCenterType = React.useCallback(() => {
    setMapCenterType(prev => prev === 'storage' ? 'company' : 'storage')
  }, [mapCenterType])

  React.useEffect(() => {
    if (map) {
      const movedCoords = mapCenterType === 'storage' ? storageCoords : companyCoords
      const newCoords = { lng: movedCoords.lng - (map.zoom || 0) * 0.007, lat: movedCoords.lat - (map.zoom || 0) * 0.0007 }
      // const bounds = new window.google.maps.LatLngBounds(newCoords)
      map.panTo(newCoords)
      // map.fitBounds(bounds)
    }
  }, [map, mapCenterType])

  return isLoaded ? (
    <MapWrapperStyled>
      <GoogleMap
        mapContainerStyle={{
          height: '90vh',
          minHeight: '800px',
          width: '100%',
        }}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          mapId: '688d1e65480187cb',
        }}
      >
        <MapContentWrapperStyled>
          <div>
            <MapForm />
          </div>
          <div>
            <MapChangeTypeWrapperStyled $type={mapCenterType} onClick={() => toggleMapCenterType()}>
              <span>sídlo</span>
              <span>sklad</span>
            </MapChangeTypeWrapperStyled>
            <MapContactInfoWrapperStyled>
              <MapContactRowWrapperStyled>
                <div>
                  <Mail height={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <span ref={emailRef}>info@solar-components.cz</span>
                </div>
                <CopyComponent passRef={emailRef} />
              </MapContactRowWrapperStyled>
              <MapContactRowWrapperStyled>
                <div>
                  <Phone height={20} />
                </div>
                <div>
                  <h4>Mobil</h4>
                  <span ref={phoneRef}>(+420) 732 433 877</span>
                </div>
                <CopyComponent passRef={phoneRef} />
              </MapContactRowWrapperStyled>
            </MapContactInfoWrapperStyled>
          </div>
        </MapContentWrapperStyled>
      </GoogleMap>
    </MapWrapperStyled>
) : <></>
})
