function Tabs({ tabs, activeTab, onChange }) {
    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    type="button"
                    className={"tab" + (activeTab === tab.id ? " tab--active" : "")}
                    onClick={() => onChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

export default Tabs;
