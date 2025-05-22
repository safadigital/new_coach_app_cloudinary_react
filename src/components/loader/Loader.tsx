import LoaderImg from '../../assets/loading.webm';

const Loader = () => {

    return (
        <div className='main_container'>
            <div className='flex w-full h-full justify-center items-center pt-[50%]'>
        <video width={150} height={150} id="banner-video" muted autoPlay loop>
  <source src={LoaderImg} type="video/webm" />
  Your browser does not support the video tag.
</video>
</div>
</div>
    )
}


export default Loader;