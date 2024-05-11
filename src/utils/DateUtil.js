export function formatDateTime(dateTime) {
  // Chuyển đổi đối số 'dateTime' thành một đối tượng Date (nếu không phải)
  const newDate = new Date(dateTime);

  // Lấy các thành phần của ngày, tháng, năm, giờ, phút và giây
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần +1
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();

  // Đảm bảo định dạng ngày và tháng có 2 chữ số bằng cách thêm '0' nếu cần
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Trả về ngày giờ được định dạng theo dạng 'dd/mm/yyyy hh:mm:ss'
  return `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
