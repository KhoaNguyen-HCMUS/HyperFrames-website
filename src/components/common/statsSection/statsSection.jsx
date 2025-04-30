import CounterCard from '../counterCard/counterCard';

export default function StatsSection() {
  return (
    <div className='bg-black py-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
      <CounterCard target={70} label='Team Members' />
      <CounterCard target={59} label='Clients' />
      <CounterCard target={1200} label='Projects' />
    </div>
  );
}
