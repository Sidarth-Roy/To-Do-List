export default function Filter({ filter, setFilter }) {
    return <div className="mb-2">
        Show:{' '}
        <button
            className={`mx-1 ${filter === 'all' ? 'underline' : ''
                }`}
            onClick={() => setFilter('all')}
        >
            All
        </button>
        <button
            className={`mx-1 ${filter === 'active' ? 'underline' : ''
                }`}
            onClick={() => setFilter('active')}
        >
            Active
        </button>
        <button
            className={`mx-1 ${filter === 'completed' ? 'underline' : ''
                }`}
            onClick={() => setFilter('completed')}
        >
            Completed
        </button>
    </div>
}