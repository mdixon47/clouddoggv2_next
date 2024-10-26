import Layout from '../layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Server, Shield, Database, Code, BarChart } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Cloud className="w-10 h-10 mb-2" />,
      title: "Cloud Migration",
      description: "Seamlessly transition your existing infrastructure and applications to the cloud.",
      details: "Our expert team will assess your current setup, develop a migration strategy, and execute a smooth transition to minimize downtime and maximize efficiency."
    },
    {
      icon: <Server className="w-10 h-10 mb-2" />,
      title: "Cloud Architecture",
      description: "Design scalable and efficient cloud architectures tailored to your business needs.",
      details: "We create robust, scalable, and cost-effective cloud architectures that align with your business goals and future growth plans."
    },
    {
      icon: <Shield className="w-10 h-10 mb-2" />,
      title: "Cloud Security",
      description: "Implement comprehensive security measures to protect your cloud infrastructure.",
      details: "Our security experts will assess vulnerabilities, implement best practices, and provide ongoing monitoring to ensure your cloud environment remains secure."
    },
    {
      icon: <Database className="w-10 h-10 mb-2" />,
      title: "Database Management",
      description: "Optimize your cloud databases for performance, scalability, and reliability.",
      details: "We offer database design, migration, and management services to ensure your data is efficiently stored, easily accessible, and properly backed up."
    },
    {
      icon: <Code className="w-10 h-10 mb-2" />,
      title: "Cloud-Native Development",
      description: "Build modern, scalable applications designed specifically for the cloud.",
      details: "Our developers create cloud-native applications that take full advantage of cloud capabilities, ensuring optimal performance and scalability."
    },
    {
      icon: <BarChart className="w-10 h-10 mb-2" />,
      title: "Cloud Optimization",
      description: "Maximize the efficiency and cost-effectiveness of your cloud infrastructure.",
      details: "We analyze your cloud usage, identify areas for improvement, and implement optimizations to reduce costs and improve performance."
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}