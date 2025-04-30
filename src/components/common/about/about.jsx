export default function About() {
  return (
    <section className='bg-black text-white py-20'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-4'>
            About <span className='text-red-600'>HYPERFRAMES</span>
          </h2>
          <div className='w-24 h-1 bg-red-600 mx-auto'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='group'>
            <img
              src='https://dummyimage.com/1200x600/000000/ffffff&text=Hello+we+are+HYPERFRAMES'
              alt='Studio Setup'
              className='rounded-lg shadow-2xl border-2 border-red-600 transition-transform duration-300 transform hover:scale-105'
            />
          </div>

          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold text-red-600 hover:text-red-500 transition-colors duration-300'>
              Professional Studio & Equipment
            </h3>
            <p className='text-gray-300'>
              HYPERFRAMES tự hào là đơn vị cung cấp dịch vụ livestream chuyên nghiệp hàng đầu tại TP.HCM. Với đội ngũ
              nhân viên giàu kinh nghiệm và trang thiết bị hiện đại, chúng tôi cam kết mang đến chất lượng tốt nhất cho
              khách hàng.
            </p>
            <ul className='space-y-4'>
              {[
                'Phim trường ảo chất lượng cao',
                'Thiết bị livestream chuyên nghiệp',
                'Đội ngũ kỹ thuật viên giàu kinh nghiệm',
                'Hỗ trợ 24/7',
              ].map((item, index) => (
                <li
                  key={index}
                  className='flex items-center space-x-2 hover:text-red-500 transition-colors duration-300'
                >
                  <svg className='w-5 h-5 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
