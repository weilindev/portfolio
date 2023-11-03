import Header from "@/components/Header"
import Container from "@/components/Container"
import BasicInfo from "@/components/BasicInfo"
import Introduce from "@/components/Introduce"
import JobHistory from "@/components/JobHistory"
import ProjectBrief from "@/components/ProjectBrief"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Container>
        <BasicInfo />
        <Introduce />
        <JobHistory />
        <ProjectBrief />
      </Container>
      <Footer />
    </main>
  )
}
