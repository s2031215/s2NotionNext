// import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
import Badsoup from '@/components/Badsoup'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ notice, className }) => {
//   const { locale } = useGlobal()
  if (notice?.blockMap) {
    return <div className={className}>
        <section id='announcement-wrapper' className="dark:text-gray-300 rounded-xl px-2 py-4">
            {/* <div><i className='mr-2 fas fa-bullhorn' />{locale.COMMON.ANNOUNCEMENT}</div> */}
            {notice && (<div id="announcement-content">
            <NotionPage post={notice} />
        </div>)}
          <div id="badsoup">
            {<Badsoup />}
          </div>
        </section>
    </div>
  } else {
    return <></>
  }
}
export default Announcement
