01 - Internet, Web, and HTTP Works:


Internet Addresses:
- The internet is a global network of computers, of which every computer connected must have a unique address.
In the form of (nnn.nnn.nnn.nnn), where each n must be a number from 0 - 255, is known as an IP address (Internet Protocol).


IP Address Difference:
- Connected through an ISP(Internet Service Provide), your assigned a temporary IP address within the duration of your session.
- Connected throigh a local area network (LAN), a permanent IP address is provided, or might obtain a temporary address from
a DHCP (dynamic host configuration protocol) server.


Protocol Stacks and Packets:
- To communicate through the internet, the protocol stack is used.
- Built into the OS.
- Referred to as the TCP/IP protocol stack, appears as the following:

Protocol Layer	                                    Comments
Application Protocols Layer	                Protocols specific to applications such as WWW, e-mail, FTP, etc.
Transmission Control Protocol Layer	        TCP directs packets to a specific application on a computer using a port number.
Internet Protocol Layer	                    IP directs packets to a specific computer using an IP address.
Hardware Layer	                            Converts binary packet data to network signals and back.
                                            (E.g. ethernet network card, modem for phone lines, etc.)


Thus:
------------------
|   Application  |
------------------
|      TCP       |
------------------
|      IP        |
------------------
|    Hardware    |
------------------

1) Your message would begin at the start of the protocol stack downwards.
2) Each stack layer breaks the message into smaller chunks of data, known as packets.
3) From the application layer to the TCP layer, Each packet is assigned a port number. To identify the program on the receiving computer to 
accept the message on the specific port.
4) After the TCP layer, packets in the IP layer receives its destination address.
5) After the message packets have been assigned a port number and IP address, the hardware layer turns the packets into electronic
signals and transmitting them.
6) The ISP's router examokes the destination address in each packet and determines where to send it.
7) Then, the packets reach the receiving computer, and will start at the BOTTOM of the computer's protocol stack upwards.
8) Going upwards, all routing data such as IP address and port number is stripped from the packets.
9) When the top of the stack is reached, packets are re-assembled into their original form.





Networking Infrastructure:
- ISP moderms controls data flow to the line router, referred as a port server, to serve access to the network.
- Packets traverse from phone network to your ISP's local equipment. Then the packets would journey through serverl routers and lines to find their destination.


Internet Infrastructure:
The internet backbone is made up of many large networks interconnected to each other.
- Known as "Network Service Provides" (NSPs), a few are UUNet, CertNet, etc.
- Networks peer with each other to exchange packet traffic.
- Each NSP is required to connnect to three "Network Access Points" (NAPs), to allow the jump from one to another.
- NSPs also interconnect at "Metropolitan Area Exchanges" (MAEs), the same purpose as NAPs, but are privately owned.
- NAPs and MAEs are referred to as Internet Exchange Points or IXs.
- NSPs can sell bandwidth to smaller networks like ISPs.



The Internet Routing Hierarchy:
- Computers do not know where other computers are, thus the information used to get packets to their destination are within routing tables,
kept by each router connected to the Internet.

- Routers are packet switches.
- When a packet arrives at a router, the router examines the IP address placed by the IP protocol layer on the originating computer.
The router checks it routing table, if the network with the IP address is found the packet is sent to that network. Otherwise, the router
sends the packet on a default route, up to the backbone hierarchy to the next router, until the NSP backbone. In which it holds the
largest routing tables, thus sending the packet to the correct backbone downward to smaller and smaller networks to its destination.



Domain Names and Address Resolution:
- "Domain Name Service" (DNS), is a distributed database that tracks computer names and thier corresponding IP addresses on the Internet.
Many computers connected to the Internet host part of the DNS database and software that allows others to access it.
Known as DNS servers, they contain subsets of the entirety of the DNS server, thus allowing the re-direction of computer requests
to another DNS server, if the domain name isn't found there.


- DNS is structured as a hierarchy. Thus, the computer requesting a name resolution will be re-directed up the hierarchy
until a DNS server is found to resolve the domain name in the request.

- When Internet connection is setup, one primary and mutliple secondary DNS servers are specified as part of the installation.
Allowing any Internet applications that need a domain name resolution will function correctly.






Internet Protocols Revisited:
- Many communication protocols are used for the Internet to function. EX: TCP and IP protocol, medium access control protocols, etc.
Higher level protocols are utilized followed by lower level protocols.


Application Protocols: HTTP and the World Wide Web:
- The most used services on the Internet is the World Wide Web (WWWW).
The application protocol that allows the web to work is "Hypertext Transfer Protocol" or HTTP.
- Web browsers and web servers use to communicate with each other over the Internet.
- Application level protocol set on top of the TCP layer.

- HTTP is a connectionless test based protocol. Clients (web browsers) send requests to web servers for web elements.
After the request is serviced by a server, the connection between client and servcer across the Internet is disconnected.
The tow computers communicating is still in tact, but the HTTP isn't, thus a new connection must be made to the server.

When typing a URL into a web browser:
1) URL contains a domain name, the browser connects to the DNS and retrieves the corresponding IP address for the web server.
2) The web browser connects to the web server and sends an HTTP request (via the protocol stack) for the desired web page.
3) The web server receives the request and checks for the desired page. If exists, the web sever sends it, if not then it will send and
HTTP 404 error message. 'Page Not Found'.
4) The web browser receives the page back and connection is closed.
5) Browser then parses through the page and looks for other page elements to complete the web page.
6) Each element needed, the browser makes additional connections and HTTP requests to the server.
7) When browser finishes loading all assets, the page is completely loaded in the browser window.



Application Protocols: SMTP and Electronic Mail:
E-mail uses an application level protocol called "Simple Mail Transfer Protocol" (SMTP).
- A text based protocol, but is connection oriented. With more complexity in the form of commands.

1) The mail client opens a connection to it's default mail server.
2) The mail server will always transmit the first message to identify itself.
3) The client sends an SMTP HELO command, to which the server responds with a 250 OK message.
4) Depending on client checking or sending mail, the appropriate SMTP command will be sent to the server.
5) The request/reponse transaction will continue until client sends an SMTP QUIT command. Connection closed.



Transmission Control Protocol:
Under application layer is the TCP layer. When applications open a connection to another computer on the Internet, the messages they send
passes down the stack to the TCP layer. 
- Responsible for routing application protocols to the correct applicatio in the destination computer. Port umers are used as seperate
channels on each computer.
When a packet arrives at a computer and makes its way up the protocol stack, the TCP layer decides which application receives the packet based on 
a port number.

TCP is not a textual protocol. TCP is a connection-oriented, reliable, byte stream service. Connection-oriented means that two applications using 
TCP must first establish a connection before exchanging data.

- Reliable as an acknowledgement is sent to the sender to confirm the arrival.


Internet Protocol:
IP is an unreliable, connectionless protocol.
- Doesn't care whether a packet gets to it's destination or not. Nor does IP know about connections and port numbers.
IP's job is too send and route packets to other computers.

