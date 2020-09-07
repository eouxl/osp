import request from '@/utils/request'

export function listPersistentVolume(cluster) {
  return request({
    url: `persistent_volume/${cluster}`,
    method: 'get',
  })
}

export function getPersistentVolume(cluster, name, output='') {
  return request({
    url: `persistent_volume/${cluster}/${name}`,
    method: 'get',
    params: { output }
  })
}