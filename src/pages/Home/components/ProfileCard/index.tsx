import { defaultTheme } from '../../../../styles/themes/default'
import {
  ProfileCardHeader,
  ProfileCardImage,
  ProfileCardInformation,
  ProfileCardWrapper,
  ProfileWrapperInformations,
} from './style'

import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { api } from '../../../../api/axios'
import gitHubLogoSvg from '../../../../assets/gitHub-logo.svg'

export interface IUserGitHubData {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: string
  bio: string
  twitter_username: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export function ProfileCard() {
  const [userGitHubInformations, setUserGitHubInformations] =
    useState<IUserGitHubData>()

  async function getUserInformation() {
    const dataAPI = await api.get(
      `users/${import.meta.env.VITE_GITHUB_USERNAME}`,
    )

    setUserGitHubInformations(dataAPI.data)
  }

  useEffect(() => {
    getUserInformation()
  }, [])

  console.log(userGitHubInformations)

  return (
    <ProfileCardWrapper>
      <ProfileCardImage src={userGitHubInformations?.avatar_url} />

      <ProfileWrapperInformations>
        <ProfileCardHeader>
          <h3 className={defaultTheme.classes['title-L']}>
            {userGitHubInformations?.name}
          </h3>
          <a
            className={defaultTheme.classes.link}
            href={userGitHubInformations?.html_url}
          >
            GITHUB
          </a>
        </ProfileCardHeader>
        <p className={defaultTheme.classes['text-M']}>
          {userGitHubInformations?.bio}
        </p>
        <ProfileCardInformation>
          <div>
            <img src={gitHubLogoSvg} />

            <span className={defaultTheme.classes['text-M']}>
              {userGitHubInformations?.login}
            </span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBuilding}
              width={18}
              height={18}
              color={defaultTheme['base-label']}
            />
            <span className={defaultTheme.classes['text-M']}>
              {userGitHubInformations?.company}
            </span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUserGroup}
              width={18}
              height={18}
              color={defaultTheme['base-label']}
            />
            <span className={defaultTheme.classes['text-M']}>
              {userGitHubInformations?.followers} seguidores
            </span>
          </div>
        </ProfileCardInformation>
      </ProfileWrapperInformations>
    </ProfileCardWrapper>
  )
}
