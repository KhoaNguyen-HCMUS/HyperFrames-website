import CoreValue from '../../components/common/coreValue/coreValue';
import LeadershipMember from '../../components/common/leadershipMember/leadershipMember';
import TeamMember from '../../components/common/teamMember/teamMember';
import { leadershipTeam, teamMembers } from '../../data/data';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FiPlay, FiPause } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';

export default function AboutUs() {
  const leadershipTeamData = leadershipTeam.leader;
  const teamMembersData = teamMembers.members;
  const scrollTimerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
    const scrollContainer = document.getElementById('team-scroll');

    if (!isAutoScrolling) {
      scrollTimerRef.current = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollBy({ left: 1, behavior: 'auto' });

          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          }
        }
      }, 20);
    } else {
      if (scrollTimerRef.current) {
        clearInterval(scrollTimerRef.current);
        scrollTimerRef.current = null;
      }
    }
  };

  useEffect(() => {
    return () => {
      if (scrollTimerRef.current) {
        clearInterval(scrollTimerRef.current);
      }
    };
  }, []);
  return (
    <div className='bg-black text-white'>
      <div className='relative mx-auto max-w-7xl rounded-3xl overflow-hidden'>
        <img src='/team.jpg' alt='HyperFrames team' className='absolute inset-0 z-10 h-full w-full object-cover' />
        <div className='absolute inset-0 z-10 bg-black/60' />
        <div className='flex min-h-[60vh] items-center justify-center px-4'>
          <h1 className='z-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'>
            Xin chào, chúng tôi là HYPER <span className='text-red-500'>FRAMES</span>
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
            <CoreValue
              letter='H'
              title='Hyper Highlight'
              description="Khai thác và làm nổi bật những chi tiết đắt giá nhất để câu chuyện được gói gọn trong một từ: 'chạm'"
            />

            <CoreValue
              letter='F'
              title='Hyper Freedom'
              description='Bằng ngôn ngữ hình ảnh tự do, chúng tôi tin rằng mọi câu chuyện đều có thể được kể theo nhiều cách khác nhau.'
            />

            <CoreValue
              letter='S'
              title='Hyper Support'
              description='Chúng tôi chọn kiến tạo thành công chung để đồng hành cùng đối tác.'
            />
          </div>
        </div>

        <div className='mt-24 mb-16'>
          <h2 className='text-3xl font-bold text-center mb-16'>
            <span className='text-red-600'>CORE TEAM</span>
          </h2>

          <div className='mb-16'>
            <h3 className='text-2xl font-bold text-center mb-10 text-red-500'>Hyper Leadership</h3>
            <div className='grid md:grid-cols-3 gap-8'>
              {leadershipTeamData.map((leader, index) => (
                <LeadershipMember key={index} name={leader.name} role={leader.role} imgSrc={leader.imgSrc} />
              ))}
            </div>
          </div>

          <div className='mb-10'>
            <h3 className='text-2xl font-bold text-center mb-10'>Our Team Members</h3>

            <div className='relative group'>
              <div className='absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none'></div>

              <div className='absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none'></div>

              <button
                className='absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-red-600/80 text-white flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600 cursor-pointer'
                onClick={() => document.getElementById('team-scroll').scrollBy({ left: -300, behavior: 'smooth' })}
              >
                <BsArrowLeft className='w-5 h-5' />
              </button>
              <button
                className='absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-red-600/80 text-white flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600 cursor-pointer'
                onClick={() => document.getElementById('team-scroll').scrollBy({ left: 300, behavior: 'smooth' })}
              >
                <BsArrowRight className='w-5 h-5' />
              </button>

              <button
                className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 w-8 h-8 rounded-full bg-black/70 border border-gray-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600/80 z-20 cursor-pointer'
                onClick={toggleAutoScroll}
              >
                {isAutoScrolling ? <FiPause className='w-4 h-4' /> : <FiPlay className='w-4 h-4' />}
              </button>

              <div
                id='team-scroll'
                className='overflow-x-auto pb-6 scrollbar-hide scroll-smooth'
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                <div className='flex space-x-8 min-w-max px-6 py-4'>
                  {teamMembersData.map((member, index) => (
                    <div
                      key={index}
                      className='transform transition-all duration-300 hover:scale-105 hover:-translate-y-2'
                    >
                      <TeamMember name={member.name} position={member.position} imgSrc={member.imgSrc} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
