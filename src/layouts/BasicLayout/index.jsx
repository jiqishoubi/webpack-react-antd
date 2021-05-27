import React, { Fragment } from 'react'
import { renderChildren } from '@/router'
import CustomHeader from '@/components/common/CustomHeader'
import Side from '@/components/common/Side'
import styles from './index.less'

const a =2222222111

function Index(props) {
  return (
    <Fragment>
      <CustomHeader />
      <div className={styles.main_content}>
        <Side />
        <div className={styles.page_content}>
          {renderChildren(props)}
        </div>
      </div>
    </Fragment>
  )
}

export default Index