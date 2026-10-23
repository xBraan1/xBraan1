import PageTransition from '../components/PageTransition';

export default function Team() {
  const team = [
    { name: 'Jordan Mitchell', role: 'Senior Stylist', image: '👩' },
    { name: 'Alex Rivera', role: 'Master Barber', image: '👨' },
    { name: 'Sam Okafor', role: 'Natural Hair Specialist', image: '👩' },
    { name: 'Casey Thompson', role: 'Colourist', image: '👩' },
    { name: 'Devon Wright', role: 'Barber & Stylist', image: '👨' },
    { name: 'Mia Chen', role: 'Treatment Specialist', image: '👩' },
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-semibold text-neutral-900 dark:text-white mb-6">Meet the Team</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">Our team of experienced professionals.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i} className="border border-neutral-100 dark:border-neutral-800 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center text-6xl">
                {member.image}
              </div>
              <div className="p-5">
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-0.5">{member.name}</h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
