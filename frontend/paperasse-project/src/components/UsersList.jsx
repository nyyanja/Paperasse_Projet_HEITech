// src/components/UsersList.jsx - Design moderne
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Search, AlertCircle, Loader, UserCircle, Mail, Trash, Edit, ChevronDown, ChevronUp } from 'lucide-react';
import './UsersList.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/utilisateurs');
        setUsers(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Erreur lors de la récupération des utilisateurs');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    const fieldA = a[sortField]?.toLowerCase() || '';
    const fieldB = b[sortField]?.toLowerCase() || '';
    
    if (sortDirection === 'asc') {
      return fieldA.localeCompare(fieldB);
    } else {
      return fieldB.localeCompare(fieldA);
    }
  });

  const filteredUsers = sortedUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animations variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  return (
    <div className="users-container">
      <motion.div 
        className="users-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="users-header">
          <h2>Liste des Utilisateurs</h2>
          <p>Gestion des comptes utilisateurs sur la plateforme</p>
        </div>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Rechercher un utilisateur..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        </div>
        
        {error && (
          <div className="error-message">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}
        
        {loading ? (
          <div className="loading-container">
            <Loader size={30} className="spinner" />
            <p>Chargement des utilisateurs...</p>
          </div>
        ) : (
          <>
            <div className="table-container">
              <table className="users-table">
                <thead>
                  <tr>
                    <th className="sortable" onClick={() => handleSort('name')}>
                      <span>Nom</span>
                      {getSortIcon('name')}
                    </th>
                    <th className="sortable" onClick={() => handleSort('email')}>
                      <span>Email</span>
                      {getSortIcon('email')}
                    </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <motion.tbody
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <motion.tr key={user._id} variants={itemVariants}>
                        <td>
                          <div className="user-name-cell">
                            <UserCircle size={24} className="user-icon" />
                            {user.name}
                          </div>
                        </td>
                        <td>
                          <div className="user-email-cell">
                            <Mail size={18} className="email-icon" />
                            {user.email}
                          </div>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button className="action-btn edit">
                              <Edit size={16} />
                            </button>
                            <button className="action-btn delete">
                              <Trash size={16} />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="no-results">
                        Aucun utilisateur trouvé
                      </td>
                    </tr>
                  )}
                </motion.tbody>
              </table>
            </div>
            
            <div className="users-stats">
              <div className="stats-item">
                <span className="stats-value">{filteredUsers.length}</span>
                <span className="stats-label">Utilisateurs affichés</span>
              </div>
              <div className="stats-item">
                <span className="stats-value">{users.length}</span>
                <span className="stats-label">Total</span>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default UsersList;