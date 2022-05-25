import { useRouter } from "next/router"//for dynamic routes

const slugPages=()=> {
  const router = useRouter()
  const {slug}=router.query
  return <div>The dynamic route is {slug}</div>
}

export default slugPages;