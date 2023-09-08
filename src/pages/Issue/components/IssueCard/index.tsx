import { defaultTheme } from '../../../../styles/themes/default'
import {
  IssueCardBody,
  IssueCardHeader,
  IssueCardWrapper,
  IssueCardInformation,
} from './style'

import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import gitHubLogoSvg from '../../../../assets/gitHub-logo.svg'
import { IssueType } from '../..'
import { numberOfDaysCalculation } from '../../../../helper/date-helper'

export function IssueCard(issue: IssueType) {
  // numberOfDaysCalculation
  return (
    <IssueCardWrapper>
      <IssueCardHeader>
        <Link to={'/'} className={defaultTheme.classes.link}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            width={18}
            height={18}
            color={defaultTheme['base-label']}
          />
          <span>VOLTAR</span>
        </Link>
        <a href={issue.html_url} className={defaultTheme.classes.link}>
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            width={18}
            height={18}
            color={defaultTheme['base-label']}
          />
        </a>
      </IssueCardHeader>
      <IssueCardBody>
        <h2 className={defaultTheme.classes['title-L']}>{issue.title}</h2>

        <IssueCardInformation>
          <div>
            <img src={gitHubLogoSvg} alt="Imagem de um gato" />
            <span className={defaultTheme.classes['text-M']}>
              {issue.user.login}
            </span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCalendarDay}
              width={18}
              height={18}
              color={defaultTheme['base-label']}
            />
            <span className={defaultTheme.classes['text-M']}>
              {numberOfDaysCalculation(issue.created_at)}
            </span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faComment}
              width={18}
              height={18}
              color={defaultTheme['base-label']}
            />
            <span className={defaultTheme.classes['text-M']}>
              {issue.comments} comentários
            </span>
          </div>
        </IssueCardInformation>
      </IssueCardBody>
    </IssueCardWrapper>
  )
}
