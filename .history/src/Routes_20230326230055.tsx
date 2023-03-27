import Home from './components/Home/Home';


const publicRoutes = [
    {path:'/', component:Home},
    {path:'/EVoucher', component:EVoucher},
    {path:'/Khuyenmai', component:Khuyenmai},
    {path:'/Thucdon', component:Thucdon},
    {path:'/Donhang', component:Donhang},
    {path:'/Cuahang', component:Cuahang},
    {path:'/Location', component:Location},
    {path:'/cart', component:Giohang},
    {path:'/delivery',component:Delivery},
    {path:'/away',component:TakeAWay},
    {path:'/thanhtoan',component:ThanhToan},
    {path:'/Donhang/DaDat',component:DonHangDaDat},

]


const privateRoute = []

export {publicRoutes}