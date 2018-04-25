############################################################
# Dockerfile to build sandbox for executing user code
# Based on Ubuntu
############################################################

FROM chug/ubuntu14.04x64 
MAINTAINER ASAD MEMON, OSMAN ALI

# Update the repository sources list
RUN echo "deb http://archive.ubuntu.com/ubuntu trusty main universe" > /etc/apt/sources.list
RUN apt-get update
#RUN apt-get upgrade

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y sudo
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y curl

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y python-software-properties
RUN DEBIAN_FRONTEND=noninteractive curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && apt-get install -y nodejs 

RUN node -v && npm -v

RUN DEBIAN_FRONTEND=noninteractive sudo npm install --unsafe-perm --verbose -g underscore request express jade shelljs passport http sys jquery lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever  debug && export NODE_PATH=/usr/local/lib/node_modules/


#Install all the languages/compilers we are supporting.
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y gcc
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y g++
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y php5-cli
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y ruby
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y python
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mono-xsp2 mono-xsp2-base

#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mono-vbnc
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y golang-go	


#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y clojure1.4


#prepare for Java download
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y software-properties-common

#grab oracle java (auto accept licence)
#RUN add-apt-repository -y ppa:webupd8team/java
#RUN apt-get update
#RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y oracle-java8-installer


#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y gobjc
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y gnustep-devel &&  sed -i 's/#define BASE_NATIVE_OBJC_EXCEPTIONS     1/#define BASE_NATIVE_OBJC_EXCEPTIONS     0/g' /usr/#include/GNUstep/GNUstepBase/GSConfig.h


#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y scala
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y perl

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y curl
#RUN mkdir -p /opt/rust && \
#    curl https://sh.rustup.rs -sSf | HOME=/opt/rust sh -s -- --no-modify-path -y && \
#    chmod -R 777 /opt/rust


RUN DEBIAN_FRONTEND=noninteractive apt-get install -y bc

RUN echo "mysql ALL = NOPASSWD: /usr/sbin/service mysql start" | cat >> /etc/sudoers

