import CounterCard from '../counterCard/counterCard';

export default function StatsSection() {
  return (
    <div className='bg-black py-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
      <CounterCard target={20} label='Thành viên' />
      <CounterCard target={18} label='Khách hàng' />
      <CounterCard target={100} label='Dự án' />
    </div>
  );
}
