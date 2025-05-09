export default function ProjectCard({ project }) {
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/);
    return match ? match[1] : null;
  };

  const getThumbnailUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '/placeholder-image.jpg';
  };

  const Card = (
    <div className='bg-black border border-red-600 rounded-xl p-4 hover:shadow-lg hover:shadow-red-600 transition-all cursor-pointer'>
      <img src={getThumbnailUrl(project.url)} alt={project.name} className='w-full h-48 object-cover rounded-lg mb-4' />
      <div className='text-red-400 text-xs uppercase mb-2 font-semibold tracking-widest'>{project.tag}</div>
      <h3 className='text-white text-lg font-bold mb-2'>{project.name}</h3>
      <span className='text-gray-400 text-sm hover:text-red-400 transition-colors'>
        {project.url ? 'Watch on YouTube' : 'Coming soon'}
      </span>
    </div>
  );

  return project.url ? (
    <a href={project.url} target='_blank' rel='noopener noreferrer' className='block'>
      {Card}
    </a>
  ) : (
    Card
  );
}
