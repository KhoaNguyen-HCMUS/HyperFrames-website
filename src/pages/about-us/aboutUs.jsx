export default function AboutUs() {
  return (
    <div className='bg-black text-white'>
      <div className='relative mx-auto max-w-7xl rounded-3xl overflow-hidden'>
        <img src='/team.jpg' alt='HyperFrames team' className='absolute inset-0 z-10 h-full w-full object-cover' />

        <div className='absolute inset-0 z-10 bg-black/60' />

        <div className='flex min-h-[60vh] items-center justify-center px-4'>
          <h1 className='z-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'>
            Xin chào, chúng tôi là HYPER <span className='text-red-500'>FRAME</span>S
          </h1>
        </div>
      </div>

      <div className='relative max-w-6xl mx-auto px-4 py-16 z-10'>
        <p className='text-lg sm:text-xl text-gray-200 leading-relaxed text-center'>
          HyperFrames tin rằng mỗi khung hình không chỉ là giới hạn, mà là điểm khởi đầu cho một thế giới rộng lớn hơn.
          Với đội ngũ HyperFrames, phá bỏ giới hạn và kiến tạo giải pháp sản xuất đa phương tiện, truyền thông sự kiện
          và sản xuất phim chuyên nghiệp phù hợp, là cách mà chúng tôi mang đến trải nghiệm dịch vụ tốt nhất cho đối
          tác.
        </p>
        <div className='mt-24 mb-16'>
          <h2 className='text-3xl font-bold text-center mb-16'>
            <span className='text-red-600'>CORE VALUE</span> - GIÁ TRỊ CỐT LÕI
          </h2>
          <div className='text-center mb-10'>
            <p className='text-xl font-medium'>HYPERFRAMES sống với tinh thần HFs</p>
          </div>

          <div className='grid md:grid-cols-3 gap-10 mt-12'>
            <div className='bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 group'>
              <div className='bg-gradient-to-br from-red-600 to-red-800 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto text-2xl font-bold group-hover:scale-110 transition-transform duration-300'>
                H
              </div>
              <h3 className='text-xl font-bold mb-4 text-center'>Hyper Highlight</h3>
              <p className='text-gray-400 text-center'>
                Khai thác và làm nổi bật những chi tiết đắt giá nhất để câu chuyện được gói gọn trong một từ: "chạm"
              </p>
            </div>

            <div className='bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 group'>
              <div className='bg-gradient-to-br from-red-600 to-red-800 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto text-2xl font-bold group-hover:scale-110 transition-transform duration-300'>
                F
              </div>
              <h3 className='text-xl font-bold mb-4 text-center'>Hyper Freedom</h3>
              <p className='text-gray-400 text-center'>
                Bằng ngôn ngữ hình ảnh tự do, chúng tôi tin rằng mọi câu chuyện đều có thể được kể theo nhiều cách khác
                nhau.
              </p>
            </div>

            {/* Core Value 3 */}
            <div className='bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 group'>
              <div className='bg-gradient-to-br from-red-600 to-red-800 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto text-2xl font-bold group-hover:scale-110 transition-transform duration-300'>
                S
              </div>
              <h3 className='text-xl font-bold mb-4 text-center'>Hyper Support</h3>
              <p className='text-gray-400 text-center'>
                Chúng tôi chọn kiến tạo thành công chung để đồng hành cùng đối tác.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
