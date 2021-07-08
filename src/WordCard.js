import CharacterCard from './CharacterCard';
import logo from './logo.svg';

export default function WordCard(props){
    return (
        <div>
            {
                Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i}/>)
            }
        </div>
    )
}