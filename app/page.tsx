import Layout from './layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Server, Shield } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Cloud Solutions for Your Business</h1>
          <p className="text-xl mb-8">Empower your organization with cutting-edge cloud technology</p>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Cloud className="w-10 h-10 mb-2" />
                <CardTitle>Cloud Migration</CardTitle>
              </CardHeader>
              <CardContent>
                Seamlessly transition your infrastructure to the cloud with our expert migration services.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Server className="w-10 h-10 mb-2" />
                <CardTitle>Cloud Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                Design scalable and efficient cloud architectures tailored to your business needs.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 mb-2" />
                <CardTitle>Cloud Security</CardTitle>
              </CardHeader>
              <CardContent>
                Protect your data and applications with our comprehensive cloud security solutions.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-8">Let's discuss how CloudDogg can help you leverage the power of the cloud.</p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  )
}