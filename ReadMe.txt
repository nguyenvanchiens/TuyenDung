+ Trong phần Abstract , có một tệp với tất cả các biến, mixin và các thành phần tương tự.
+ Phần Core chứa các tệp như kiểu chữ, cài đặt lại và mã soạn sẵn, được sử dụng trên toàn bộ 
trang web. Khi bạn viết mã này, không có ghi đè nào nữa
+ Phần Components phần chứa các kiểu cho tất cả các thành phần sẽ được tạo cho một trang web, 
bao gồm các nút, băng chuyền, tab, phương thức và những thứ tương tự.

+ Phần Layout có tất cả các kiểu cần thiết cho bố cục của trang web, tức là đầu trang, chân trang.

+ Phần Pages chứa các kiểu cho mỗi trang riêng lẻ. Hầu hết mọi trang cần phải có các kiểu 
cụ thể chỉ được sử dụng cho trang cụ thể đó.

+Để mọi phần có thể tái sử dụng và mã sass có thể dễ dàng truy cập, có một Section/Blocks . 
Ngoài ra, điều quan trọng là phải có phần này để bạn không cần phải tìm kiếm xem mã cụ thể nằm 
trong tệp home.sass hay about.sass trong phần Pages.

+ Bạn nên đặt mỗi phần trong một tệp .sass riêng biệt. Do đó, nếu bạn có hai phần anh hùng khác nhau, 
hãy đặt mã vào cùng một tệp để biết rằng ở đó bạn có thể tìm thấy mã cho hai phần. Và nếu bạn làm theo mẫu này, bạn sẽ có phần lớn các tệp trong thư mục này.

+ Phần Vendors dành cho các khung bootstrap, vì vậy, nếu bạn sử dụng một phần trong dự án của mình, 
hãy tạo phần này.

++ Sắp xếp ngăn nắp code trong file
+ extend luôn đặt trên cùng → sau đó đến include → properties ở những line → 
tiếp theo sẽ override phần ở trên.