# Hướng dẫn cài đặt và chạy dự án Node.js - TH-C4K-JSI02
## 1. Cài đặt môi trường

Trước tiên, bạn cần cài đặt **Node.js** và **npm** (Node Package Manager) trên máy tính của mình.

### Bước 1: Cài đặt Node.js

- Truy cập trang chính thức của Node.js tại [https://nodejs.org/](https://nodejs.org/).
- Tải và cài đặt phiên bản **LTS** (Long Term Support).

Sau khi cài đặt xong, bạn có thể kiểm tra phiên bản Node.js và npm bằng cách mở terminal (hoặc command prompt) và chạy các lệnh sau:
```
node -v
npm -v
```
### Bước 2: Cài đặt dự án

Trước tiên, cần clone dự án từ GitHub (hoặc từ kho lưu trữ của lớp học nếu có). Mở terminal và chạy lệnh sau:
```
git clone https://github.com/thayquandz/TH-C4K-JSI02.git
```
Lệnh trên sẽ cài đặt dự án vào vị trí hiện tại của terminal trên máy

### Bước 3: Cài đặt các phụ thuộc

Sau khi đã clone dự án về, cần cài đặt các phụ thuộc (dependencies) của dự án. Di chuyển vào thư mục dự án và chạy lệnh:
```
cd TH-C4K-JSI02
npm install
```
Lệnh này sẽ tải và cài đặt tất cả các gói cần thiết được liệt kê trong package.json.

### Bước 4: Chạy ứng dụng Node.js
Để chạy dự án, sử dụng lệnh sau:
```
npm start
```
Nếu mọi thứ hoạt động bình thường, bạn sẽ thấy một thông báo trên terminal rằng server đang chạy, ví dụ:
```
Express application is running | port: 3000
```
Truy cập vào http://localhost:3000 trên trình duyệt để xem kết quả.