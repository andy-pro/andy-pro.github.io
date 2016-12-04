'use strict';

const root = 'https://api.github.com/'

export const searchUsers = query =>
  fetch(root + 'search/users?q=' + query)
    .then(r => r.json())

const cache = {}

/*  https://api.github.com/users/username/repos 
  github api limit: 60 requests per hour for unauthorized users
  so get user data from cache or server
*/
export const getRepos = ({url, data}) => {
  const payload = items => ({
    items,
    coords: data,
    show: true
  })
  return  cache[url] ?
    new Promise((res, rej) => res())
      .then(() => payload(cache[url]))
    :
    // fetch(url, {cache: 'force-cache'})
    fetch(url)
      .then(r => r.json())
      .then(r => payload(cache[url] = r))
}