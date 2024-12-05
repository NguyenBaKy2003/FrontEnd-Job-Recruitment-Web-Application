const people = [
  {
    name: "Nguyen Ba Ky",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-1/344542573_1016776169700186_59734981782926054_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHE3pzgZ09WIumVk2SaUlzW8AfSrMmpN6nwB9Ksyak3qRO3GRAQCJN5k0u9DAbLgHWd1mkLGJGTGZQ8xITqFMmC&_nc_ohc=jGanNVFrBxIQ7kNvgEyC35v&_nc_zt=24&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AiUgm9wCwZSWqHE3Yh6tHkr&oh=00_AYA4nnyuPefG8Ov75zIpLv8e0-TPm8M1EtesEnjg1fKTHg&oe=675790A6",
  },
];

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-44 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
