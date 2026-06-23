export function Footer() {
  return (
    <>
      <a href={`${Homepage}`} target="_blank">支持一下，请投币</a>
      <span>
        <span>NewsNow © 1998 By </span>
        <a href={Author.url} target="_blank">
          {Author.name}
        </a>
      </span>
    </>
  )
}
