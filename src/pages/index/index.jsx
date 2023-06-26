import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import Taro, {useLoad, useShareAppMessage } from '@tarojs/taro'
import { useState } from 'react'
import './index.less'

export default function Index() {
  let [data, setData] = useState([{
    imageUrl: 'https://www.hlapi.cn/api/sjmm1?r=' + Math.random()
  }, {
    imageUrl: 'https://www.hlapi.cn/api/sjmm1?r=' + Math.random()
  }, {
    imageUrl: 'https://www.hlapi.cn/api/sjmm1?r=' + Math.random()
  }])
  useLoad(() => {
    Taro.showLoading({
      title: '加载中',
    })
  })

  let getData = () => {
    let imageUrl = 'https://www.hlapi.cn/api/sjmm1?r=' + Math.random()
    setData([...data, {imageUrl}])
  }

  let handleChange = (event) => {
    if(event.detail.current == data.length -2) {
      getData()
    }
  }

  let loaded = () => {
    Taro.hideLoading()
  }

  useShareAppMessage(() => {})

  return (
    <Swiper
      className='swiper'
      vertical
      cacheExtent={1}
      onChange={handleChange}
    >
      {
        data.map((item, index) => <SwiperItem key={index}>
          <View className='swiper-item'>
            <Image onLoad={loaded} mode='aspectFill' showMenuByLongpress src={item.imageUrl} /> 
          </View>
        </SwiperItem>)
      }
      </Swiper>
  )
}
