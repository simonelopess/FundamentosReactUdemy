import DirectChild from './DirectChild';

const DirectFather = (props) => {
  return (
    <div>
      <DirectChild text="Junior" number={20} nerd={true} />
      <DirectChild text="Gabriel" number={17} nerd={false} />
    </div>
  )
}

export default DirectFather;