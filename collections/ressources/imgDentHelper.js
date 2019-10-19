import dents from './imgDent.json'

const IMG_PATH = '/assets/img/ImgDent'

export const get_img_dent = (num, type="v") => {
  const img = dents.filter(d => {
    return d.nomimg === num+type
  })
  return IMG_PATH+'/'+img[0].img
}