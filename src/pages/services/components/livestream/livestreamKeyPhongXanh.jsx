import React from 'react';

export default function LivestreamKeyPhongXanh() {
  return (
    <section className='px-4 md:px-16 py-8 text-white bg-black min-h-screen'>
      {/* Banner */}
      <div className='relative w-full h-64 md:h-96 mb-12'>
        <img
          src='https://dummyimage.com/1200x900/000/fff'
          alt='Livestream Key Phông Xanh'
          className='w-full h-full object-cover rounded-lg shadow-lg'
        />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-center'>
            Livestream key phông xanh, phim trường ảo chất lượng
          </h1>
        </div>
      </div>

      {/* Nội dung */}
      <div className='max-w-4xl mx-auto space-y-6'>
        <p>
          Livestream key phông xanh, phim trường ảo là giải pháp tiên tiến cho phép bạn tạo ra các chương trình truyền
          hình trực tiếp chuyên nghiệp ngay cả trong không gian nhỏ hẹp.
        </p>
        <p>
          Với công nghệ phông xanh hiện đại, chúng tôi giúp bạn thay đổi phông nền linh hoạt theo yêu cầu, tạo nên những
          bối cảnh ấn tượng mà không cần phải di chuyển tới phim trường thực tế.
        </p>
        <h2 className='text-2xl font-bold text-red-500 mt-8'>Ưu điểm dịch vụ:</h2>
        <ul className='list-disc list-inside space-y-2 text-gray-300'>
          <li>Tiết kiệm chi phí sản xuất và di chuyển.</li>
          <li>Tạo nhiều bối cảnh khác nhau chỉ trong 1 phòng quay.</li>
          <li>Hình ảnh sắc nét, màu sắc chân thực, chuyên nghiệp.</li>
          <li>Âm thanh chất lượng cao, xử lý tiếng vang tốt.</li>
        </ul>
        <h2 className='text-2xl font-bold text-red-500 mt-8'>Ứng dụng phổ biến:</h2>
        <ul className='list-disc list-inside space-y-2 text-gray-300'>
          <li>Livestream bán hàng, hội thảo trực tuyến.</li>
          <li>Ghi hình talkshow, chương trình đào tạo nội bộ.</li>
          <li>Quay TVC quảng cáo với bối cảnh ảo sáng tạo.</li>
        </ul>
        <p className='mt-8'>
          Với đội ngũ kỹ thuật viên giàu kinh nghiệm và hệ thống trang thiết bị hiện đại, chúng tôi cam kết mang đến cho
          bạn dịch vụ livestream phông xanh chuyên nghiệp nhất tại Việt Nam.
        </p>
        <p className='text-red-400 font-semibold mt-4'>
          Liên hệ ngay với chúng tôi để được tư vấn và báo giá chi tiết!
        </p>
      </div>
    </section>
  );
}
