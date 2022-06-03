import { Thumbnail } from './Thumbnail';
import FlipMove from 'react-flip-move';

interface ResultsProps {
  results: [
    {
      id: string;
      backdrop_path: string;
      poster_path: string;
      overview: string;
      title: string;
      original_name: string;
      media_type: string;
      release_date: string;
      first_air_date: string;
      vote_count: string;
    }
  ];
}

export const Results = ({ results }: ResultsProps) => {
  return (
    <FlipMove className='my-10 flex-wrap justify-center px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex'>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};
