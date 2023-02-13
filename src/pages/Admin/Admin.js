import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Layout, Menu, Radio, Select, Switch, theme, TreeSelect } from 'antd';
import { useState } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { NHOM } from '../../util/config';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const data = {
     tenPhim:'test tên phim',
     dangChieu: true,
     ngayKhoiChieu:'12/09/2000',
     hinhAnh: 'https://picsum.photos/200/300',
     maPhim:6789
}

export default function Admin() {
     let navigate = useNavigate()
     let [img, setImg] = useState('')
     let dispatch = useDispatch()

     // table
     const {
          token: { colorBgContainer },
     } = theme.useToken();

     // form
     const [componentSize, setComponentSize] = useState('default');
     const onFormLayoutChange = ({ size }) => {
          setComponentSize(size);
     };

     // useFormik
     let formik = useFormik({
          initialValues: {
               tenPhim: data.tenPhim,
               trailer: '',
               moTa: '',
               ngayKhoiChieu: data.ngayKhoiChieu,
               dangChieu: data.dangChieu,
               sapChieu: false,
               hot: false,
               danhGia: 0,
               hinhAnh: null,
               // thieu ma nhom
               maNhom: NHOM,
               maPhim: data.maPhim

          },

          onSubmit: (values) => {
               console.log('values', values)
               

               // tao doi duong formData => dua gia tri tu formik vao formData
               let formData = new FormData()

               for (var key in values) {
                    if (key !== 'hinhAnh') {
                         formData.append(key, values[key])
                    } else {
                         if(values.hinhAnh !== null){
                              formData.append('File', values.hinhAnh, values.hinhAnh.name)
                         } 
                    }

               }
               console.log('formik', formData.get('tenPhim'))
               console.log('formik', formData.get('File'))
               console.log('formik', formData.get('ngayKhoiChieu'))
               


               

               // goi api chuyen thong tin tu formData ve backEnd
               // dispatch(...(formData))               

               //chuyen trang sau khi cap nhat, viet tren action redux-thunk
               // navigate('/')



          }
     })

     const handleChangeDate = (value) => {
          formik.setFieldValue('ngayKhoiChieu', moment(value.$d).format('DD/MM/YYYY'))
          // console.log(moment(value).format(''))
          // let yourdate = '2021-01-02T07:57:45.121Z'; // for example
          // console.log(value.$d)
          // console.log(moment(yourdate).format('MM/DD/YYYY'));

          // output : 01-02-2021
     }

     const handleChangeSwitch = (name) => {

          return (value) => {
               formik.setFieldValue(name, value)
          }
     }


     const handChangeFile = async (e) => {
          //lay file tu e
          let file = e.target.files[0]
          console.log('file', file)

          await formik.setFieldValue('hinhAnh', file)
          // tao doi tuong de doc file
          let reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = (e) => {
               // console.log('img', e.target.result)
               setImg(e.target.result) //hinh base 64
          }

         



     }

     return (


          <Layout>
               <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                         console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                         console.log(collapsed, type);
                    }}
               >
                    <div className="logo  text-center p-6 font-bold text-white" ><img alt='123' src='https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png' /></div>
                    <Menu
                         theme="dark"
                         mode="inline"
                         defaultSelectedKeys={['4']}
                         items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                              (icon, index) => ({
                                   key: String(index + 1),
                                   icon: React.createElement(icon),
                                   label: `nav ${index + 1}`,
                              }),
                         )}
                    />
               </Sider>
               <Layout>
                    <Header
                         style={{
                              padding: 0,
                              background: colorBgContainer,
                         }}
                    />
                    <Content
                         style={{
                              margin: '24px 16px 0',
                         }}
                    >
                         <div
                              style={{
                                   padding: 24,
                                   minHeight: 360,
                                   background: colorBgContainer,
                              }}
                         >
                              {/* form content */}
                              <div>
                                   <p>Thêm phim</p>
                                   <div className='container mx-auto'>
                                        <Form
                                             onSubmitCapture={formik.handleSubmit}
                                             labelCol={{
                                                  span: 4,
                                             }}
                                             wrapperCol={{
                                                  span: 14,
                                             }}
                                             layout="horizontal"
                                             initialValues={{
                                                  size: componentSize,
                                             }}
                                             onValuesChange={onFormLayoutChange}
                                             size={componentSize}
                                             style={{
                                                  maxWidth: 600,
                                             }}
                                        >
                                             <Form.Item label="Form Size" name="size">
                                                  <Radio.Group>
                                                       <Radio.Button value="small">Small</Radio.Button>
                                                       <Radio.Button value="default">Default</Radio.Button>
                                                       <Radio.Button value="large">Large</Radio.Button>
                                                  </Radio.Group>
                                             </Form.Item>
                                             <Form.Item label="Tên phim">
                                                  <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
                                             </Form.Item>
                                             <Form.Item label="Trailer">
                                                  <Input name='trailer' />
                                             </Form.Item>
                                             <Form.Item label="Mô tả">
                                                  <Input name='moTa' />
                                             </Form.Item>
                                             <Form.Item label="Ngày khởi chiếu">
                                                  <DatePicker onChange={handleChangeDate} format='DD/MM/YYYY' defaultValue={dayjs(`${formik.values.ngayKhoiChieu}`, 'DD/MM/YYYY')} />
                                             </Form.Item>
                                             <Form.Item label="Đang chiếu" valuePropName="checked">
                                                  <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
                                             </Form.Item>
                                             <Form.Item label="Sắp chiếu" valuePropName="checked">
                                                  <Switch onChange={handleChangeSwitch('sapChieu')} />
                                             </Form.Item>
                                             <Form.Item label="Hot" valuePropName="checked">
                                                  <Switch onChange={handleChangeSwitch('hot')} />
                                             </Form.Item>
                                             <Form.Item label="Số sao">
                                                  <InputNumber onChange={(e) => (formik.setFieldValue('danhGia', e))} min='1' max='10' />
                                             </Form.Item>


                                             <Form.Item label="Hình ảnh">
                                                  <input type="file" onChange={handChangeFile} accept="image/png, image/jpeg" />
                                                  <img alt='...' src={img === '' ? data.hinhAnh : img} style={{ width: 150, height: 150 }} />
                                             </Form.Item>

                                             <Form.Item label="Tác vụ">
                                                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
                                             </Form.Item>
                                        </Form>
                                   </div>
                              </div>
                         </div>
                    </Content>
                    <Footer
                         style={{
                              textAlign: 'center',
                         }}
                    >
                         Ant Design ©2023 Created by Ant UED
                    </Footer>
               </Layout>
          </Layout>
     );
}
