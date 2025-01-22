// import RootGame from '@/components/RootGame'
import dynamic from 'next/dynamic';

const RootGame = dynamic(() => import('@/components/RootGame'), { ssr: false });
const page = () => {
  return (
    <>
      {/* <Frame>
      <Game />
    </Frame> */}

      <RootGame />
    </>
  )
}

export default page
