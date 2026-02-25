import { FaFacebook, FaGithub, FaTwitch, FaYoutube } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import EightNine from './EightNine'
import Character from '../assets/character.png'

function MainBody() {
    return (
        <>
        <div className='flex flex-col items-center gap-4 mt-16 p-4'>
          <div className='w-full max-w-sm flex flex-col items-center gap-4 text-center'>
            <div className='w-30 h-30 rounded-full overflow-clip'>
              <img src={Character}></img>
            </div>
            <div className='font-semibold text-2xl text-white'>Six Seven</div>
            <div className='text-white'>Web Developer | Meme Enthusiast</div>

            <div className='flex gap-4'>
              <div className='w-7 h-7 rounded-full flex justify-center items-center text-5xl text-white'>
                <FaFacebook />
              </div>
              <div className='w-7 h-7 rounded-full flex justify-center items-center text-5xl text-white'>
                <FaInstagramSquare />
              </div>
              <div className='w-7 h-7 rounded-full flex justify-center items-center text-5xl text-white'>
                <FaLinkedin />
              </div>
            </div>
            <EightNine>
              <div className='text-4xl'>
                <FaGithub />
              </div>
              <div className='text-2xl'>GitHub</div>
            </EightNine>
            <EightNine>
              <div className='text-4xl'>
                <FaYoutube />
              </div>
              <div className='text-2xl'>YouTube</div>
            </EightNine>
            <EightNine>
              <div className='text-4xl'>
                <FaTwitch />
              </div>
              <div className='text-2xl'>Twitch</div>
            </EightNine>
          </div>
        </div>
        </>
    )
}

export default MainBody;