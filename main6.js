function PostItem(props) {
  return (
    <li>
      <h2>
        <a href="chitiet.html" title="">{props.description}</a>
      </h2>
      <div className="item">
        <p>{props.detail}</p>
        <div className="clr"></div>
      </div>
    </li>
  )
}

const listNews = [
  {
    "id": "1",
    "description": "Trung Quốc điều thêm 17 tàu đến khu vực giàn khoan",
    "detail": "Để bảo vệ giàn khoan, Trung Quốc đã điều thêm 17 tàu các loại so với hôm trước, sẵn sàng đâm va vào tàu Việt Nam.",
    "catId": "1"
  },
  {
    "id": "2",
    "description": "Trọng tài - vết đen của kỳ World Cup sôi động",
    "detail": "World Cup 2014 chưa đi hết lượt đầu vòng bảng nhưng các trọng tài đẳng cấp FIFA đã có tới bốn trận bị chỉ trích dữ dội.",
    "catId": "2"
  },
  {
    "id": "3",
    "description": "Những mỹ nhân Việt duyên dáng ở tuổi tứ tuần",
    "detail": "Việt Trinh, Thu Hà, Hồng Nhung, Thanh Lam... vẫn giữ được nét thanh xuân, tươi trẻ và cuốn hút theo thời gian nhờ phong cách làm đẹp tinh tế.",
    "catId": "1"
  },
  {
    "id": "4",
    "description": "Chuyển nhượng 17/6: Arsenal mua Balotelli, tráo hàng Man Utd",
    "detail": "Đội bóng thành London đang đẩy mạnh việc tuyển lựa những vị trí còn yếu trong đội hình ở cả ba tuyến.",
    "catId": "3"
  },
  {
    "id": "5",
    "description": "Chuyên gia Anh tin chắc vị trí MH370 rơi",
    "detail": "Các chuyên gia thuộc công ty viễn thông Anh Inmarsat cho rằng họ xác định được vị trí chiếc máy bay MH370 đã rơi xuống trên Ấn Độ Dương, tuy nhiên đội.",
    "catId": "1"
  }
]

const App = (
  <div className="wrapper">
    <div id="header">
      <div className="header-left fl">
        <a href="index.html" title=""><img src="images/logo_edu.png" alt="" /></a>
      </div>
      <div className="header-right fr">
        <a href="index.html" title=""><img src="images/banner.jpg" alt="" /></a>
      </div>
      <div className="clr"></div>
    </div>

    <div id="menu">
      <ul>
        <li><a href="index.html" title="">Trang chủ</a></li>
        <li className="active"><a href="tintuc.html" title="">Tin tức</a></li>
        <li><a href="lienhe.html" title="">Liên hệ</a></li>
      </ul>
      <div className="clr"></div>
    </div>

    <div id="content">
      <div className="content-left fl">
        <h3>Danh mục tin</h3>
        <ul>
          <li><a href="danhmuc.html">Thời sự</a></li>
          <li><a href="danhmuc.html">Góc nhìn</a></li>
          <li><a href="danhmuc.html">Thế giới</a></li>
          <li><a href="danhmuc.html">Kinh doanh</a></li>
        </ul>
      </div>
      <div className="content-right fr">
        <h3>Tin tức</h3>
        <div className="main-content items-new">
          <ul>
            {listNews.map(news =>
              <PostItem
                key={news.id}
                description={news.description}
                detail={news.detail}
              />
            )}
          </ul>
        </div>
      </div>
      <div className="clr"></div>
    </div>

    <div id="footer">
      <p>Trung tâm đào tạo Lập trình viên VinaEnter EDU</p>
      <p>Copyright &copy 2014 - Designed by <a href="" title="">VinaEnter</a></p>
    </div>
  </div>
)

ReactDOM.render(App, document.getElementById("root"))