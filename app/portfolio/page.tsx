import Layout from '../layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform Migration",
      client: "ShopEasy Inc.",
      description: "Migrated a large-scale e-commerce platform to AWS, resulting in 40% improved performance and 30% cost reduction.",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Financial Services Cloud Architecture",
      client: "SecureBank",
      description: "Designed and implemented a secure, compliant cloud architecture for a financial services provider.",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Healthcare Data Management",
      client: "MediCare Solutions",
      description: "Developed a HIPAA-compliant cloud-based data management system for a healthcare provider.",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "IoT Data Processing Platform",
      client: "SmartCity Technologies",
      description: "Built a scalable IoT data processing platform capable of handling millions of device connections.",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Multi-Cloud Strategy Implementation",
      client: "GlobalCorp",
      description: "Designed and implemented a multi-cloud strategy to optimize performance and reduce vendor lock-in.",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Serverless Web Application",
      client: "StartupX",
      description: "Developed a highly scalable, cost-effective serverless web application for a fast-growing startup.",
      image: "/placeholder.svg?height=200&width=400"
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">{project.client}</p>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}