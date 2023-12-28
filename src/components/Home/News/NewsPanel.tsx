import JournalIcon from '@/components/Icons/JournalIcon';
import NewsItem from './NewsItem';

const NewsPanel: React.FC = () => {
  return (
    <div className="bg-black/80 dark:bg-white rounded-2xl w-3/4 shadow-2xl p-4 mt-8
      text-white dark:text-black border-4 solid border-slate-500
    ">
      <h2 className="text-2xl font-black mb-4">Últimas notícias <JournalIcon /></h2>
      <ul className="space-y-4">
        <NewsItem 
          title="Versión en español del blog ya disponible" 
          url="/"
          locale="es"
          text="Haz clic aquí para leer el blog en español." 
        />
      </ul>
    </div>
  );
};

export default NewsPanel;
