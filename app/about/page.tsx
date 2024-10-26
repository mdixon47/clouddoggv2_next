import Layout from '../layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function About() {
  const teamMembers = [
    { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg?height=200&width=200" },
    { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=200&width=200" },
    { name: "Alice Johnson", role: "Cloud Architect", image: "/placeholder.svg?height=200&width=200" },
    { name: "Bob Williams", role: "Security Specialist", image: "/placeholder.svg?height=200&width=200" }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About CloudDogg</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2015, CloudDogg has been at the forefront of cloud technology innovation. 
            Our journey began with a simple mission: to help businesses harness the power of the cloud 
            to transform their operations and achieve unprecedented growth.
          </p>
          <p>
            Over the years, we've helped hundreds of companies across various industries to 
            successfully migrate to the cloud, optimize their infrastructure, and develop 
            cutting-edge cloud-native applications.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            At CloudDogg, our mission is to empower businesses with innovative cloud solutions 
            that drive growth, efficiency, and security. We're committed to delivering 
            exceptional value to our clients through our expertise, dedication, and 
            cutting-edge cloud technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={200} 
                    height={200} 
                    className="rounded-full mx-auto"
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-2">{member.name}</CardTitle>
                  <p>{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}