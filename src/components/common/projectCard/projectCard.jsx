import { useEffect, useState } from 'react';

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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

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

  const videoId = getYouTubeVideoId(project.url);

  return (
    <>
      {project.url ? (
        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          className='block'
          onClick={(e) => {
            e.preventDefault();
            if (videoId) setOpen(true);
            else window.open(project.url, '_blank', 'noopener');
          }}
        >
          {Card}
        </a>
      ) : (
        Card
      )}

      {open && videoId && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
          onClick={() => setOpen(false)}
        >
          <div
            className='relative w-full max-w-5xl'
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className='relative' style={{ paddingTop: '56.25%' }}>
              <iframe
                className='absolute inset-0 w-full h-full rounded-lg'
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={project.name}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
