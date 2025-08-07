provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "rps_ec2" {
  ami           = "ami-0c55b159cbfafe1f0" # ✅ Update with the latest Amazon Linux 2 AMI ID for your region
  instance_type = "t2.micro"
  key_name      = "your-key-pair-name"   # 🔑 Replace with your actual EC2 key pair name

  provisioner "remote-exec" {
    inline = [
      "sudo yum update -y",
      "sudo yum install -y docker git",
      "sudo service docker start",
      "sudo usermod -a -G docker ec2-user",
      "docker pull gituser1/rps-game",
      "docker run -d -p 3000:3000 gituser1/rps-game"
    ]

    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file("~/.ssh/your-private-key.pem") # 🔐 Replace with the path to your private key
      host        = self.public_ip
    }
  }

  tags = {
    Name = "rps-game-instance"
  }
}

output "app_url" {
  value = "http://${aws_instance.rps_ec2.public_ip}:3000"
}
