import AnimatedBackground from '../animatedBackground/animatedBackground';

export default function About() {
  return (
    <section className='relative bg-black text-white py-20 overflow-hidden'>
      <AnimatedBackground />
      <div className='relative max-w-6xl mx-auto px-4' style={{ zIndex: 20 }}>
        <div className='text-center mb-12'>
          <img src='/logo.png' alt='HyperFrames Logo' className='mx-auto ' />
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='group'>
            <img
              src='/team.jpg'
              alt='Studio Setup'
              className='rounded-lg shadow-2xl transition-transform duration-300 transform hover:scale-105'
            />
          </div>

          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold text-red-600 hover:text-red-500 transition-colors duration-300'>
              Hyper Frames là gì?
            </h3>
            <p className='text-gray-300 text-justify'>
              Hyper Frames là một production house sáng tạo chuyên sản xuất sản phẩm đa phương tiện, truyền thông sự
              kiện, phim chuyên nghiệp và cung cấp thiết bị .
            </p>
            <p className='text-gray-300 text-justify'>
              Chúng tôi tin rằng mỗi thương hiệu, mỗi cá nhân đều có một câu chuyện đáng để kể và nhiệm vụ của Hyper
              Frames là biến câu chuyện đó thành những thước phim, hình ảnh chạm cảm xúc, truyền tải thông điệp rõ ràng
              và mang lại hiệu quả truyền thông.
            </p>
            <p className='text-gray-300 text-justify'>
              Tại Hyper Frames, chúng tôi làm việc với tinh thần đặt chuyên nghiệp lên hàng đầu, lắng nghe, thấu hiểu để
              mang đến giải pháp đúng- đủ - đẹp theo nhu cầu của từng khách hàng
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
